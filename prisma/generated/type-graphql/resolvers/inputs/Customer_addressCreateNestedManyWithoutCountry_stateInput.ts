import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCountry_stateInputEnvelope } from "../inputs/Customer_addressCreateManyCountry_stateInputEnvelope";
import { Customer_addressCreateOrConnectWithoutCountry_stateInput } from "../inputs/Customer_addressCreateOrConnectWithoutCountry_stateInput";
import { Customer_addressCreateWithoutCountry_stateInput } from "../inputs/Customer_addressCreateWithoutCountry_stateInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateNestedManyWithoutCountry_stateInput", {})
export class Customer_addressCreateNestedManyWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutCountry_stateInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutCountry_stateInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManyCountry_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManyCountry_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_addressWhereUniqueInput[] | undefined;
}
