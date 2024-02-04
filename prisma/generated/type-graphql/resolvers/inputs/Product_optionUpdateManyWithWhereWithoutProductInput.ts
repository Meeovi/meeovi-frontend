import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionScalarWhereInput } from "../inputs/Product_optionScalarWhereInput";
import { Product_optionUpdateManyMutationInput } from "../inputs/Product_optionUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_optionUpdateManyWithWhereWithoutProductInput", {})
export class Product_optionUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_optionScalarWhereInput, {
    nullable: false
  })
  where!: Product_optionScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_optionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_optionUpdateManyMutationInput;
}
