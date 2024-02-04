import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMail_template_mediaInput } from "../inputs/MediaCreateWithoutMail_template_mediaInput";
import { MediaUpdateWithoutMail_template_mediaInput } from "../inputs/MediaUpdateWithoutMail_template_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutMail_template_mediaInput", {})
export class MediaUpsertWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutMail_template_mediaInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMail_template_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
