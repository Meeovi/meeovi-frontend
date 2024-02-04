import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationScalarWhereInput } from "../inputs/Product_feature_set_translationScalarWhereInput";
import { Product_feature_set_translationUpdateManyMutationInput } from "../inputs/Product_feature_set_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_feature_set_translationUpdateManyWithWhereWithoutProduct_feature_setInput", {})
export class Product_feature_set_translationUpdateManyWithWhereWithoutProduct_feature_setInput {
  @TypeGraphQL.Field(_type => Product_feature_set_translationScalarWhereInput, {
    nullable: false
  })
  where!: Product_feature_set_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_feature_set_translationUpdateManyMutationInput;
}
