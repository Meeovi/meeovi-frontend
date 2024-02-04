import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationScalarWhereInput } from "../inputs/Product_cross_selling_translationScalarWhereInput";
import { Product_cross_selling_translationUpdateManyMutationInput } from "../inputs/Product_cross_selling_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_cross_selling_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Product_cross_selling_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationScalarWhereInput, {
    nullable: false
  })
  where!: Product_cross_selling_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_cross_selling_translationUpdateManyMutationInput;
}
