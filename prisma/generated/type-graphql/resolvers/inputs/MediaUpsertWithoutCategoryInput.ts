import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutCategoryInput } from "../inputs/MediaCreateWithoutCategoryInput";
import { MediaUpdateWithoutCategoryInput } from "../inputs/MediaUpdateWithoutCategoryInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutCategoryInput", {})
export class MediaUpsertWithoutCategoryInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: MediaCreateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
