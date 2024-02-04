import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManyCustomerInputEnvelope } from "../inputs/Order_customerCreateManyCustomerInputEnvelope";
import { Order_customerCreateOrConnectWithoutCustomerInput } from "../inputs/Order_customerCreateOrConnectWithoutCustomerInput";
import { Order_customerCreateWithoutCustomerInput } from "../inputs/Order_customerCreateWithoutCustomerInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerCreateNestedManyWithoutCustomerInput", {})
export class Order_customerCreateNestedManyWithoutCustomerInput {
  @TypeGraphQL.Field(_type => [Order_customerCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Order_customerCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Order_customerCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Order_customerCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_customerWhereUniqueInput[] | undefined;
}
