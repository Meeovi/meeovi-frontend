import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutProduct_mediaInput } from "../inputs/MediaUpdateWithoutProduct_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutProduct_mediaInput", {})
export class MediaUpdateToOneWithWhereWithoutProduct_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_mediaInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutProduct_mediaInput;
}
