import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManyCountryInputEnvelope } from "../inputs/Order_addressCreateManyCountryInputEnvelope";
import { Order_addressCreateOrConnectWithoutCountryInput } from "../inputs/Order_addressCreateOrConnectWithoutCountryInput";
import { Order_addressCreateWithoutCountryInput } from "../inputs/Order_addressCreateWithoutCountryInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateNestedManyWithoutCountryInput", {})
export class Order_addressCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput[] | undefined;
}
