import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutMedia_translationInput } from "../inputs/LanguageCreateNestedOneWithoutMedia_translationInput";
import { MediaCreateNestedOneWithoutMedia_translationInput } from "../inputs/MediaCreateNestedOneWithoutMedia_translationInput";

@TypeGraphQL.InputType("Media_translationCreateInput", {})
export class Media_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutMedia_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutMedia_translationInput;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutMedia_translationInput, {
    nullable: false
  })
  media!: MediaCreateNestedOneWithoutMedia_translationInput;
}
