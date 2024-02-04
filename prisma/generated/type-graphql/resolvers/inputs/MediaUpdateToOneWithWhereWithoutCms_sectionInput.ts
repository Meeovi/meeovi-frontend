import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutCms_sectionInput } from "../inputs/MediaUpdateWithoutCms_sectionInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutCms_sectionInput", {})
export class MediaUpdateToOneWithWhereWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutCms_sectionInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutCms_sectionInput;
}
