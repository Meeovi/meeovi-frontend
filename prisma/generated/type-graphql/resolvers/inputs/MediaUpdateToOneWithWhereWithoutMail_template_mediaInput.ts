import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutMail_template_mediaInput } from "../inputs/MediaUpdateWithoutMail_template_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutMail_template_mediaInput", {})
export class MediaUpdateToOneWithWhereWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutMail_template_mediaInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutMail_template_mediaInput;
}
