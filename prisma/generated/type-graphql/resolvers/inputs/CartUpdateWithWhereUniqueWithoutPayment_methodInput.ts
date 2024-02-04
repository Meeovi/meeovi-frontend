import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartUpdateWithoutPayment_methodInput } from "../inputs/CartUpdateWithoutPayment_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateWithWhereUniqueWithoutPayment_methodInput", {})
export class CartUpdateWithWhereUniqueWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  data!: CartUpdateWithoutPayment_methodInput;
}
