import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutMedia_thumbnailInput } from "../inputs/MediaCreateOrConnectWithoutMedia_thumbnailInput";
import { MediaCreateWithoutMedia_thumbnailInput } from "../inputs/MediaCreateWithoutMedia_thumbnailInput";
import { MediaUpdateToOneWithWhereWithoutMedia_thumbnailInput } from "../inputs/MediaUpdateToOneWithWhereWithoutMedia_thumbnailInput";
import { MediaUpsertWithoutMedia_thumbnailInput } from "../inputs/MediaUpsertWithoutMedia_thumbnailInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutMedia_thumbnailNestedInput", {})
export class MediaUpdateOneRequiredWithoutMedia_thumbnailNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_thumbnailInput, {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_thumbnailInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutMedia_thumbnailInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_thumbnailInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutMedia_thumbnailInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutMedia_thumbnailInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutMedia_thumbnailInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutMedia_thumbnailInput | undefined;
}
