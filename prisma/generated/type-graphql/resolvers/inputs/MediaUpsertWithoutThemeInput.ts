import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutThemeInput } from "../inputs/MediaCreateWithoutThemeInput";
import { MediaUpdateWithoutThemeInput } from "../inputs/MediaUpdateWithoutThemeInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutThemeInput", {})
export class MediaUpsertWithoutThemeInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutThemeInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutThemeInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutThemeInput, {
    nullable: false
  })
  create!: MediaCreateWithoutThemeInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
