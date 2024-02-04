import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCountryInputEnvelope } from "../inputs/Customer_addressCreateManyCountryInputEnvelope";
import { Customer_addressCreateOrConnectWithoutCountryInput } from "../inputs/Customer_addressCreateOrConnectWithoutCountryInput";
import { Customer_addressCreateWithoutCountryInput } from "../inputs/Customer_addressCreateWithoutCountryInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateNestedManyWithoutCountryInput", {})
export class Customer_addressCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_addressWhereUniqueInput[] | undefined;
}
