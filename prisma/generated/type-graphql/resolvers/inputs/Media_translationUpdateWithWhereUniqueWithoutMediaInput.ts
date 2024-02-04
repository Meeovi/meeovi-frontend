import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationUpdateWithoutMediaInput } from "../inputs/Media_translationUpdateWithoutMediaInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationUpdateWithWhereUniqueWithoutMediaInput", {})
export class Media_translationUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_translationUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Media_translationUpdateWithoutMediaInput;
}
