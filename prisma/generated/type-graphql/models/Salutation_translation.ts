import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Salutation } from "../models/Salutation";

@TypeGraphQL.ObjectType("Salutation_translation", {})
export class Salutation_translation {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  salutation_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  letter_name?: string | null;

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

  salutation?: Salutation;
}
