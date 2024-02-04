import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateManyOrderInputEnvelope } from "../inputs/Order_tagCreateManyOrderInputEnvelope";
import { Order_tagCreateOrConnectWithoutOrderInput } from "../inputs/Order_tagCreateOrConnectWithoutOrderInput";
import { Order_tagCreateWithoutOrderInput } from "../inputs/Order_tagCreateWithoutOrderInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagCreateNestedManyWithoutOrderInput", {})
export class Order_tagCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Order_tagCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_tagCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_tagCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_tagCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_tagCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_tagWhereUniqueInput[] | undefined;
}
