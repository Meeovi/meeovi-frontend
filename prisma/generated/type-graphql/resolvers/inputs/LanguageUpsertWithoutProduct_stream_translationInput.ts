import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_stream_translationInput } from "../inputs/LanguageCreateWithoutProduct_stream_translationInput";
import { LanguageUpdateWithoutProduct_stream_translationInput } from "../inputs/LanguageUpdateWithoutProduct_stream_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_stream_translationInput", {})
export class LanguageUpsertWithoutProduct_stream_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_stream_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_stream_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
