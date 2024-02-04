import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("locale_translationLocale_idLanguage_idCompoundUniqueInput", {})
export class locale_translationLocale_idLanguage_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  locale_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;
}
