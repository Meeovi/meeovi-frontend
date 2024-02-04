import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutMedia_thumbnailInput } from "../inputs/MediaUpdateWithoutMedia_thumbnailInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutMedia_thumbnailInput", {})
export class MediaUpdateToOneWithWhereWithoutMedia_thumbnailInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_thumbnailInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutMedia_thumbnailInput;
}
