import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/MediaCreateOrConnectWithoutProperty_group_optionInput";
import { MediaCreateWithoutProperty_group_optionInput } from "../inputs/MediaCreateWithoutProperty_group_optionInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutProperty_group_optionInput", {})
export class MediaCreateNestedOneWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProperty_group_optionInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProperty_group_optionInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProperty_group_optionInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProperty_group_optionInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
