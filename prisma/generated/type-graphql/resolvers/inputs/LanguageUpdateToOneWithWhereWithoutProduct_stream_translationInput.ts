import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_stream_translationInput } from "../inputs/LanguageUpdateWithoutProduct_stream_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_stream_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_stream_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_stream_translationInput;
}
