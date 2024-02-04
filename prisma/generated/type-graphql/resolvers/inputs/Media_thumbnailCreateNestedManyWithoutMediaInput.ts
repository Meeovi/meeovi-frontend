import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailCreateManyMediaInputEnvelope } from "../inputs/Media_thumbnailCreateManyMediaInputEnvelope";
import { Media_thumbnailCreateOrConnectWithoutMediaInput } from "../inputs/Media_thumbnailCreateOrConnectWithoutMediaInput";
import { Media_thumbnailCreateWithoutMediaInput } from "../inputs/Media_thumbnailCreateWithoutMediaInput";
import { Media_thumbnailWhereUniqueInput } from "../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.InputType("Media_thumbnailCreateNestedManyWithoutMediaInput", {})
export class Media_thumbnailCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Media_thumbnailCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Media_thumbnailCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Media_thumbnailCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Media_thumbnailCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_thumbnailWhereUniqueInput[] | undefined;
}
