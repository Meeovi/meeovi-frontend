import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_administration_snippet } from "../models/App_administration_snippet";
import { Language } from "../models/Language";
import { Locale_translation } from "../models/Locale_translation";
import { User } from "../models/User";
import { LocaleCount } from "../resolvers/outputs/LocaleCount";

@TypeGraphQL.ObjectType("Locale", {})
export class Locale {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app_administration_snippet?: App_administration_snippet[];

  language_language_locale_idTolocale?: Language[];

  language_language_translation_code_idTolocale?: Language | null;

  locale_translation?: Locale_translation[];

  user?: User[];

  @TypeGraphQL.Field(_type => LocaleCount, {
    nullable: true
  })
  _count?: LocaleCount | null;
}
