import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateWithoutMediaInput } from "../inputs/Media_translationCreateWithoutMediaInput";
import { Media_translationUpdateWithoutMediaInput } from "../inputs/Media_translationUpdateWithoutMediaInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationUpsertWithWhereUniqueWithoutMediaInput", {})
export class Media_translationUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_translationUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Media_translationUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Media_translationCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Media_translationCreateWithoutMediaInput;
}
