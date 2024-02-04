import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutThemeInput } from "../inputs/MediaCreateOrConnectWithoutThemeInput";
import { MediaCreateWithoutThemeInput } from "../inputs/MediaCreateWithoutThemeInput";
import { MediaUpdateToOneWithWhereWithoutThemeInput } from "../inputs/MediaUpdateToOneWithWhereWithoutThemeInput";
import { MediaUpsertWithoutThemeInput } from "../inputs/MediaUpsertWithoutThemeInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutThemeNestedInput", {})
export class MediaUpdateOneWithoutThemeNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutThemeInput, {
    nullable: true
  })
  create?: MediaCreateWithoutThemeInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutThemeInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutThemeInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutThemeInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutThemeInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutThemeInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutThemeInput | undefined;
}
