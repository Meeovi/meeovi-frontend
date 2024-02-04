import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutCms_sectionInput } from "../inputs/MediaCreateWithoutCms_sectionInput";
import { MediaUpdateWithoutCms_sectionInput } from "../inputs/MediaUpdateWithoutCms_sectionInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutCms_sectionInput", {})
export class MediaUpsertWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutCms_sectionInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutCms_sectionInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutCms_sectionInput, {
    nullable: false
  })
  create!: MediaCreateWithoutCms_sectionInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
