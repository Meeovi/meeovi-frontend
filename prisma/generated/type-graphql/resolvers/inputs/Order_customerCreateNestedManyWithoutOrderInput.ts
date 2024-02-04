import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManyOrderInputEnvelope } from "../inputs/Order_customerCreateManyOrderInputEnvelope";
import { Order_customerCreateOrConnectWithoutOrderInput } from "../inputs/Order_customerCreateOrConnectWithoutOrderInput";
import { Order_customerCreateWithoutOrderInput } from "../inputs/Order_customerCreateWithoutOrderInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerCreateNestedManyWithoutOrderInput", {})
export class Order_customerCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Order_customerCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_customerCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_customerCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_customerCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_customerWhereUniqueInput[] | undefined;
}
