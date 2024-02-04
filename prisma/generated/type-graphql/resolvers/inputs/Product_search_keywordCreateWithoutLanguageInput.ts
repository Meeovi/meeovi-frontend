import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_search_keywordInput } from "../inputs/ProductCreateNestedOneWithoutProduct_search_keywordInput";

@TypeGraphQL.InputType("Product_search_keywordCreateWithoutLanguageInput", {})
export class Product_search_keywordCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  keyword!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  ranking!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_search_keywordInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_search_keywordInput;
}
