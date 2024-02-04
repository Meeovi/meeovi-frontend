import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutMail_template_mediaInput } from "../inputs/MediaCreateOrConnectWithoutMail_template_mediaInput";
import { MediaCreateWithoutMail_template_mediaInput } from "../inputs/MediaCreateWithoutMail_template_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutMail_template_mediaInput", {})
export class MediaCreateNestedOneWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutMail_template_mediaInput, {
    nullable: true
  })
  create?: MediaCreateWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutMail_template_mediaInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
