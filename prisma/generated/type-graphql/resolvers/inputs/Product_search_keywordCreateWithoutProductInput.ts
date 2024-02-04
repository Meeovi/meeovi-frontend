import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_search_keywordInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_search_keywordInput";

@TypeGraphQL.InputType("Product_search_keywordCreateWithoutProductInput", {})
export class Product_search_keywordCreateWithoutProductInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_search_keywordInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_search_keywordInput;
}
