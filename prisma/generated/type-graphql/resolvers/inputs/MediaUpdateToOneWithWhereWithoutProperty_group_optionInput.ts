import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutProperty_group_optionInput } from "../inputs/MediaUpdateWithoutProperty_group_optionInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutProperty_group_optionInput", {})
export class MediaUpdateToOneWithWhereWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutProperty_group_optionInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutProperty_group_optionInput;
}
