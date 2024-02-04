import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationScalarWhereInput } from "../inputs/Product_translationScalarWhereInput";
import { Product_translationUpdateManyMutationInput } from "../inputs/Product_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Product_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_translationScalarWhereInput, {
    nullable: false
  })
  where!: Product_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_translationUpdateManyMutationInput;
}
