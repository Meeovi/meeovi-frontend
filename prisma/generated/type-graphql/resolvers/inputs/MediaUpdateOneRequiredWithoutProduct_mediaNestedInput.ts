import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProduct_mediaInput } from "../inputs/MediaCreateOrConnectWithoutProduct_mediaInput";
import { MediaCreateWithoutProduct_mediaInput } from "../inputs/MediaCreateWithoutProduct_mediaInput";
import { MediaUpdateToOneWithWhereWithoutProduct_mediaInput } from "../inputs/MediaUpdateToOneWithWhereWithoutProduct_mediaInput";
import { MediaUpsertWithoutProduct_mediaInput } from "../inputs/MediaUpsertWithoutProduct_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutProduct_mediaNestedInput", {})
export class MediaUpdateOneRequiredWithoutProduct_mediaNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_mediaInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProduct_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProduct_mediaInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProduct_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutProduct_mediaInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutProduct_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutProduct_mediaInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutProduct_mediaInput | undefined;
}
