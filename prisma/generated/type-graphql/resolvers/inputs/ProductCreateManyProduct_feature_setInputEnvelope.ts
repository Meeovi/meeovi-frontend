import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_feature_setInput } from "../inputs/ProductCreateManyProduct_feature_setInput";

@TypeGraphQL.InputType("ProductCreateManyProduct_feature_setInputEnvelope", {})
export class ProductCreateManyProduct_feature_setInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyProduct_feature_setInput], {
    nullable: false
  })
  data!: ProductCreateManyProduct_feature_setInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
