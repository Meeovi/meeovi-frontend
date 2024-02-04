import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutCategoryInput } from "../inputs/MediaUpdateWithoutCategoryInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutCategoryInput", {})
export class MediaUpdateToOneWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutCategoryInput;
}
