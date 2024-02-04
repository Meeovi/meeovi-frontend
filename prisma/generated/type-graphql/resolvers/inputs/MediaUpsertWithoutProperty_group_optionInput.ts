import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProperty_group_optionInput } from "../inputs/MediaCreateWithoutProperty_group_optionInput";
import { MediaUpdateWithoutProperty_group_optionInput } from "../inputs/MediaUpdateWithoutProperty_group_optionInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutProperty_group_optionInput", {})
export class MediaUpsertWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutProperty_group_optionInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutProperty_group_optionInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProperty_group_optionInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProperty_group_optionInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
