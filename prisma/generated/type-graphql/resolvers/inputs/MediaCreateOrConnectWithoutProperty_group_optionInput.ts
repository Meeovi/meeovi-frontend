import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProperty_group_optionInput } from "../inputs/MediaCreateWithoutProperty_group_optionInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutProperty_group_optionInput", {})
export class MediaCreateOrConnectWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProperty_group_optionInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProperty_group_optionInput;
}
