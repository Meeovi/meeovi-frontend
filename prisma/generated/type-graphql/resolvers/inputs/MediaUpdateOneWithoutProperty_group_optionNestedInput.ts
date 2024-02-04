import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/MediaCreateOrConnectWithoutProperty_group_optionInput";
import { MediaCreateWithoutProperty_group_optionInput } from "../inputs/MediaCreateWithoutProperty_group_optionInput";
import { MediaUpdateToOneWithWhereWithoutProperty_group_optionInput } from "../inputs/MediaUpdateToOneWithWhereWithoutProperty_group_optionInput";
import { MediaUpsertWithoutProperty_group_optionInput } from "../inputs/MediaUpsertWithoutProperty_group_optionInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutProperty_group_optionNestedInput", {})
export class MediaUpdateOneWithoutProperty_group_optionNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProperty_group_optionInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProperty_group_optionInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProperty_group_optionInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProperty_group_optionInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutProperty_group_optionInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutProperty_group_optionInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutProperty_group_optionInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutProperty_group_optionInput | undefined;
}
