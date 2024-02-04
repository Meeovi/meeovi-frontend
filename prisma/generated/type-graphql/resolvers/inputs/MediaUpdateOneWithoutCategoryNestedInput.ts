import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCategoryInput } from "../inputs/MediaCreateOrConnectWithoutCategoryInput";
import { MediaCreateWithoutCategoryInput } from "../inputs/MediaCreateWithoutCategoryInput";
import { MediaUpdateToOneWithWhereWithoutCategoryInput } from "../inputs/MediaUpdateToOneWithWhereWithoutCategoryInput";
import { MediaUpsertWithoutCategoryInput } from "../inputs/MediaUpsertWithoutCategoryInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutCategoryNestedInput", {})
export class MediaUpdateOneWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutCategoryInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutCategoryInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutCategoryInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutCategoryInput | undefined;
}
