import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Theme } from "../models/Theme";

@TypeGraphQL.ObjectType("Theme_translation", {})
export class Theme_translation {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  theme_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  labels?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  help_texts?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  language?: Language;

  theme?: Theme;
}
