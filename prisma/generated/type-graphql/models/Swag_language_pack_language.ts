import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Swag_language_pack_languageCount } from "../resolvers/outputs/Swag_language_pack_languageCount";

@TypeGraphQL.ObjectType("Swag_language_pack_language", {})
export class Swag_language_pack_language {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  administration_active?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  sales_channel_active?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  language_language_swag_language_pack_language_idToswag_language_pack_language?: Language[];

  language_swag_language_pack_language_language_idTolanguage?: Language;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageCount, {
    nullable: true
  })
  _count?: Swag_language_pack_languageCount | null;
}
