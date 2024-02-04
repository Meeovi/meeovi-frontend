import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManyCountry_stateInputEnvelope } from "../inputs/Order_addressCreateManyCountry_stateInputEnvelope";
import { Order_addressCreateOrConnectWithoutCountry_stateInput } from "../inputs/Order_addressCreateOrConnectWithoutCountry_stateInput";
import { Order_addressCreateWithoutCountry_stateInput } from "../inputs/Order_addressCreateWithoutCountry_stateInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateNestedManyWithoutCountry_stateInput", {})
export class Order_addressCreateNestedManyWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutCountry_stateInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutCountry_stateInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManyCountry_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManyCountry_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput[] | undefined;
}
