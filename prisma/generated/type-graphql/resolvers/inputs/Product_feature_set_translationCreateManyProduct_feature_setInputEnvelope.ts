import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateManyProduct_feature_setInput } from "../inputs/Product_feature_set_translationCreateManyProduct_feature_setInput";

@TypeGraphQL.InputType("Product_feature_set_translationCreateManyProduct_feature_setInputEnvelope", {})
export class Product_feature_set_translationCreateManyProduct_feature_setInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationCreateManyProduct_feature_setInput], {
    nullable: false
  })
  data!: Product_feature_set_translationCreateManyProduct_feature_setInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
