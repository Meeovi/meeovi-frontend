import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailUpdateWithoutMediaInput } from "../inputs/Media_thumbnailUpdateWithoutMediaInput";
import { Media_thumbnailWhereUniqueInput } from "../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.InputType("Media_thumbnailUpdateWithWhereUniqueWithoutMediaInput", {})
export class Media_thumbnailUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnailWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_thumbnailUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Media_thumbnailUpdateWithoutMediaInput;
}
