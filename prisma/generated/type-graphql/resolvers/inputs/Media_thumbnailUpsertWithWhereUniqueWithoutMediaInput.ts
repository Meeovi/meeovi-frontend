import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailCreateWithoutMediaInput } from "../inputs/Media_thumbnailCreateWithoutMediaInput";
import { Media_thumbnailUpdateWithoutMediaInput } from "../inputs/Media_thumbnailUpdateWithoutMediaInput";
import { Media_thumbnailWhereUniqueInput } from "../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.InputType("Media_thumbnailUpsertWithWhereUniqueWithoutMediaInput", {})
export class Media_thumbnailUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnailWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_thumbnailUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Media_thumbnailUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Media_thumbnailCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Media_thumbnailCreateWithoutMediaInput;
}
