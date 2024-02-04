import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMail_template_mediaInput } from "../inputs/MediaCreateWithoutMail_template_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutMail_template_mediaInput", {})
export class MediaCreateOrConnectWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMail_template_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMail_template_mediaInput;
}
