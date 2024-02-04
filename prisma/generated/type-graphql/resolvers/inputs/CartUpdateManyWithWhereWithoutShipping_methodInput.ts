import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyMutationInput } from "../inputs/CartUpdateManyMutationInput";

@TypeGraphQL.InputType("CartUpdateManyWithWhereWithoutShipping_methodInput", {})
export class CartUpdateManyWithWhereWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => CartScalarWhereInput, {
    nullable: false
  })
  where!: CartScalarWhereInput;

  @TypeGraphQL.Field(_type => CartUpdateManyMutationInput, {
    nullable: false
  })
  data!: CartUpdateManyMutationInput;
}
