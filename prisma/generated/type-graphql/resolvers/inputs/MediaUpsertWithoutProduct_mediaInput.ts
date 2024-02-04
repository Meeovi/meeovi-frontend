import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_mediaInput } from "../inputs/MediaCreateWithoutProduct_mediaInput";
import { MediaUpdateWithoutProduct_mediaInput } from "../inputs/MediaUpdateWithoutProduct_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutProduct_mediaInput", {})
export class MediaUpsertWithoutProduct_mediaInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_mediaInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutProduct_mediaInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_mediaInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
