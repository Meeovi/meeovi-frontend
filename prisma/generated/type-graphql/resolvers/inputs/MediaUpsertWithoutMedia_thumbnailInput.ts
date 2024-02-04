import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMedia_thumbnailInput } from "../inputs/MediaCreateWithoutMedia_thumbnailInput";
import { MediaUpdateWithoutMedia_thumbnailInput } from "../inputs/MediaUpdateWithoutMedia_thumbnailInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutMedia_thumbnailInput", {})
export class MediaUpsertWithoutMedia_thumbnailInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_thumbnailInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutMedia_thumbnailInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_thumbnailInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMedia_thumbnailInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
