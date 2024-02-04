import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCreateManyLanguageInput } from "../inputs/Product_stream_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_stream_translationCreateManyLanguageInputEnvelope", {})
export class Product_stream_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_stream_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_stream_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
