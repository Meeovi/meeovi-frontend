import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateWithoutOrderInput } from "../inputs/Order_tagCreateWithoutOrderInput";
import { Order_tagUpdateWithoutOrderInput } from "../inputs/Order_tagUpdateWithoutOrderInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagUpsertWithWhereUniqueWithoutOrderInput", {})
export class Order_tagUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_tagUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: Order_tagUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => Order_tagCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_tagCreateWithoutOrderInput;
}
